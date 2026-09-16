import mongoose from 'mongoose';

const contactSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  company: {
    type: String,
    trim: true,
    default: '',
  },
  phone: {
    type: String,
    trim: true,
    default: '',
  },
  subject: {
    type: String,
    trim: true,
    default: 'General Inquiry',
    enum: ['General Inquiry', 'Product Demo', 'Enterprise Partnership', 'Technical Support', 'Custom Solution', 'Investor Relations'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [3000, 'Message cannot exceed 3000 characters'],
  },
  status: {
    type: String,
    enum: ['new', 'in-review', 'contacted', 'resolved'],
    default: 'new',
  },
  ipAddress: {
    type: String,
    default: '',
  }
}, {
  timestamps: true,
});

export const ContactSubmission = mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', contactSubmissionSchema);
