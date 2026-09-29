export interface Profile {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  date_of_birth: string | null;
  gender: 'male' | 'female' | 'other' | null;
  category: 'general' | 'obc' | 'sc' | 'st' | 'ews' | null;
  annual_family_income: number | null;
  state: string | null;
  district: string | null;
  education_level: string | null;
  institution_name: string | null;
  course_name: string | null;
  aadhaar_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  description: string | null;
  amount: number;
  eligibility_criteria: Record<string, unknown>;
  education_levels: string[];
  categories: string[];
  states: string[];
  income_limit: number | null;
  min_percentage: number | null;
  application_start: string | null;
  application_end: string | null;
  documents_required: string[];
  status: 'active' | 'closed' | 'upcoming';
  created_at: string;
}

export interface Application {
  id: string;
  user_id: string;
  scholarship_id: string;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected' | 'disbursed';
  documents: Record<string, string>;
  applied_date: string | null;
  reviewed_date: string | null;
  dbt_status: 'pending' | 'processing' | 'credited' | 'failed' | null;
  dbt_amount: number | null;
  dbt_date: string | null;
  dbt_reference: string | null;
  remarks: string | null;
  created_at: string;
  updated_at: string;
  scholarship?: Scholarship;
}

export interface Grievance {
  id: string;
  user_id: string;
  application_id: string | null;
  subject: string;
  description: string;
  category: 'application' | 'payment' | 'document' | 'technical' | 'other';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  response: string | null;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'deadline' | 'status_update' | 'grievance_update' | 'general';
  scholarship_id: string | null;
  is_read: boolean;
  created_at: string;
}

export const EDUCATION_LEVELS = [
  '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
  '11th', '12th', 'diploma', 'undergraduate', 'postgraduate', 'phd',
] as const;

export const CATEGORIES = ['general', 'obc', 'sc', 'st', 'ews', 'minority'] as const;

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi',
  'Jammu and Kashmir', 'Ladakh', 'Chandigarh', 'Puducherry',
  'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli and Daman and Diu',
  'Lakshadweep',
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  general: 'General',
  obc: 'OBC',
  sc: 'SC',
  st: 'ST',
  ews: 'EWS',
  minority: 'Minority',
};

export const GENDER_LABELS: Record<string, string> = {
  male: 'Male',
  female: 'Female',
  other: 'Other',
};

export function formatCurrency(amount: number): string {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(amount % 100000 === 0 ? 0 : 1)} Lakh`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function formatDate(date: string | null): string {
  if (!date) return '-';
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function daysUntil(date: string | null): number {
  if (!date) return 0;
  const diff = new Date(date).getTime() - new Date().getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
