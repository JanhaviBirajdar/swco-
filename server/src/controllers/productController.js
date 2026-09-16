import { Product } from '../models/Product.js';
import { defaultProducts } from '../data/seedData.js';
import { getDbStatus } from '../config/db.js';

// In-memory cache / fallback store
let fallbackProducts = [...defaultProducts];

// @desc    Get all active products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const { category, featured, search } = req.query;

    if (getDbStatus()) {
      const query = { status: 'active' };
      if (category && category !== 'All') {
        query.category = category;
      }
      if (featured === 'true') {
        query.featured = true;
      }
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { shortDescription: { $regex: search, $options: 'i' } },
          { tagline: { $regex: search, $options: 'i' } }
        ];
      }

      const products = await Product.find(query).sort({ order: 1, createdAt: -1 });
      if (products.length > 0) {
        return res.status(200).json({
          success: true,
          count: products.length,
          source: 'database',
          data: products,
        });
      }
    }

    // Fallback in-memory handler
    let result = [...fallbackProducts];
    if (category && category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (featured === 'true') {
      result = result.filter(p => p.featured === true);
    }
    if (search) {
      const term = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.tagline.toLowerCase().includes(term)
      );
    }

    return res.status(200).json({
      success: true,
      count: result.length,
      source: 'embedded',
      data: result,
    });
  } catch (error) {
    console.error('[ProductController Error - getProducts]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve products',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Get single product by slug
// @route   GET /api/products/:slug
// @access  Public
export const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    if (getDbStatus()) {
      const product = await Product.findOne({ slug: slug.toLowerCase() });
      if (product) {
        return res.status(200).json({
          success: true,
          source: 'database',
          data: product,
        });
      }
    }

    // Fallback in-memory lookup
    const fallbackProduct = fallbackProducts.find(
      p => p.slug.toLowerCase() === slug.toLowerCase()
    );

    if (!fallbackProduct) {
      return res.status(404).json({
        success: false,
        message: `Product with identifier '${slug}' not found`,
      });
    }

    return res.status(200).json({
      success: true,
      source: 'embedded',
      data: fallbackProduct,
    });
  } catch (error) {
    console.error('[ProductController Error - getProductBySlug]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve product details',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
