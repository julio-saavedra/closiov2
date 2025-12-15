/*
  # Create newsletter_subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key) - Unique identifier for each subscriber
      - `email` (text, unique, not null) - Subscriber's email address
      - `created_at` (timestamptz) - When the subscription was created

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for anonymous users to insert their email (public signup)
    - No select/update/delete policies for anonymous users (data protection)
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);
