'use server';

export async function submitFeedback(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const grade = formData.get('grade') as string;
    const message = formData.get('message') as string;

    const scriptUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

    if (!scriptUrl) {
        console.error('GOOGLE_SHEET_WEBAPP_URL is not defined in environment variables');
        return { success: false, error: 'Server configuration error' };
    }

    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                grade,
                message,
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            // Some Apps Script web apps return 302 redirects which fetch handles, 
            // but if it's a real error, we catch it here.
            const errorText = await response.text();
            console.error('Google Apps Script error:', errorText);
            return { success: false, error: 'Database connection failed' };
        }

        return { success: true };
    } catch (error) {
        console.error('Feedback submission error:', error);
        return { success: false, error: 'Failed to send feedback' };
    }
}

export async function submitTestimonial(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const scriptUrl = process.env.TESTIMONIALS_SHEET_WEBAPP_URL;

    if (!scriptUrl) {
        console.error('TESTIMONIALS_SHEET_WEBAPP_URL is not defined in environment variables');
        return { success: false, error: 'Server configuration error' };
    }

    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Google Apps Script error (Testimonials):', errorText);
            return { success: false, error: 'Database connection failed' };
        }

        return { success: true };
    } catch (error) {
        console.error('Testimonial submission error:', error);
        return { success: false, error: 'Failed to send testimonial' };
    }
}

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    const scriptUrl = process.env.CONTACT_US_SHEET_WEBAPP_URL;

    if (!scriptUrl) {
        console.error('CONTACT_US_SHEET_WEBAPP_URL is not defined in environment variables');
        return { success: false, error: 'Server configuration error' };
    }

    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Google Apps Script error (Contact Us):', errorText);
            return { success: false, error: 'Database connection failed' };
        }

        return { success: true };
    } catch (error) {
        console.error('Contact form submission error:', error);
        return { success: false, error: 'Failed to send contact inquiry' };
    }
}
