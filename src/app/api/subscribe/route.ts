import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Mailchimp configuration
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER_PREFIX || !process.env.MAILCHIMP_LIST_ID) {
      console.error('Mailchimp environment variables not configured');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add member to Mailchimp list
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: '',
        LNAME: '',
      },
    });

    console.log('Successfully added member to Mailchimp:', response);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
      data: {
        email: email,
        status: 'subscribed',
      },
    });

  } catch (error: unknown) {
    console.error('Mailchimp API error:', error);

    // Handle specific Mailchimp errors
    if (error && typeof error === 'object' && 'status' in error && 'title' in error) {
      const mailchimpError = error as { status: number; title: string };
      
      if (mailchimpError.status === 400 && mailchimpError.title === 'Member Exists') {
        return NextResponse.json(
          { success: false, message: 'This email is already subscribed' },
          { status: 400 }
        );
      }

      if (mailchimpError.status === 400 && mailchimpError.title === 'Invalid Resource') {
        return NextResponse.json(
          { success: false, message: 'Invalid email address' },
          { status: 400 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
