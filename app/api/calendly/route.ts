import { NextRequest, NextResponse } from 'next/server';

// Calendly URL from environment variables
const CALENDLY_URL = process.env.CALENDLY_URL || 'https://calendly.com/justinjavonitalla/nexxus-lab';

// Get Calendly booking link
export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    message: 'Calendly booking link',
    url: CALENDLY_URL
  });
}
