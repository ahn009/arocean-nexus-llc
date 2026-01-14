// API route for contact form submission

import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body);
    
    // In a real application, you would:
    // 1. Send email notification
    // 2. Save to database
    // 3. Add to CRM system
    // 4. Send confirmation email to user
    
    // For now, we'll simulate a successful submission
    console.log('Contact form submitted:', validatedData);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error instanceof Error && 'issues' in error) {
      // Zod validation error
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation error', 
          details: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
}