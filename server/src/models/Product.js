import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'Layers' },
  highlight: { type: String }
}, { _id: false });

const benefitSchema = new mongoose.Schema({
  metric: { type: String, required: true },
  label: { type: String, required: true },
  detail: { type: String, required: true }
}, { _id: false });

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
}, { _id: false });

const productSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, 'Product slug is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Enterprise Suite', 'Data & Intelligence', 'Workflow & Automation', 'Cloud & DevOps', 'Security & Compliance', 'Developer Tools'],
  },
  badge: {
    type: String,
    default: 'Production-Grade',
  },
  icon: {
    type: String,
    default: 'Box',
  },
  color: {
    type: String,
    default: '#3888ff',
  },
  order: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  capabilities: [{
    type: String,
  }],
  features: [featureSchema],
  benefits: [benefitSchema],
  faqs: [faqSchema],
  specs: {
    deployment: { type: String, default: 'Cloud / Hybrid / On-Premise' },
    compliance: { type: String, default: 'SOC 2 Type II, ISO 27001, GDPR' },
    availability: { type: String, default: '99.99% SLA' },
    apiSupport: { type: String, default: 'REST, GraphQL, gRPC, Webhooks' },
  },
  status: {
    type: String,
    enum: ['active', 'beta', 'archived'],
    default: 'active',
  }
}, {
  timestamps: true,
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
