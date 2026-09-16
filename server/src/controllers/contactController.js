import { ContactSubmission } from '../models/ContactSubmission.js';
import { getDbStatus } from '../config/db.js';

// In-memory fallback submissions for demo/offline resilience
const fallbackSubmissions = [];

// @desc    Submit a contact inquiry
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res) => {
  try {
    const { name, email, company, phone, subject, message } = req.body;

    // Strict input validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid full name (minimum 2 characters).',
      });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Please write a message of at least 10 characters detailing your inquiry.',
      });
    }

    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : '',
      phone: phone ? phone.trim() : '',
      subject: subject || 'General Inquiry',
      message: message.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date(),
    };

    let savedSubmission = null;

    if (getDbStatus()) {
      savedSubmission = await ContactSubmission.create(submissionData);
    } else {
      savedSubmission = {
        _id: 'mock_' + Date.now(),
        ...submissionData,
      };
      fallbackSubmissions.push(savedSubmission);
    }

    console.log(`[Contact] New submission received from ${submissionData.name} <${submissionData.email}> [Subject: ${submissionData.subject}]`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out to VasuNiti. Our enterprise solutions team will respond within 24 hours.',
      data: {
        id: savedSubmission._id,
        name: savedSubmission.name,
        email: savedSubmission.email,
        subject: savedSubmission.subject,
        timestamp: savedSubmission.createdAt,
      },
    });
  } catch (error) {
    console.error('[ContactController Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Get contact submissions (Admin / telemetry)
// @route   GET /api/contact
// @access  Internal
export const getSubmissions = async (req, res) => {
  try {
    if (getDbStatus()) {
      const submissions = await ContactSubmission.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: submissions.length,
        data: submissions,
      });
    }

    return res.status(200).json({
      success: true,
      count: fallbackSubmissions.length,
      data: fallbackSubmissions,
    });
  } catch (error) {
    console.error('[ContactController Error - getSubmissions]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve inquiries.',
    });
  }
};
