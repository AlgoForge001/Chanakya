'use server';

/**
 * Generic helper to handle Google Apps Script submissions with robust error handling
 * and explicit redirect following.
 */
async function postToAppsScript(url: string, data: any, context: string) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toLocaleString(), // Match format in Apps Script snippet
            }),
            redirect: 'follow',
            cache: 'no-store',
        });

        if (!response.ok) {
            // Log detailed error info to the server console
            let errorDetail = '';
            try {
                errorDetail = await response.text();
            } catch (e) {
                errorDetail = 'Could not read error response body';
            }

            console.error(`[${context}] Google Apps Script Error [${response.status}]:`, errorDetail);

            // Return a more descriptive error based on the status
            if (response.status === 404) return { success: false, error: 'Database endpoint not found. Please check configuration.' };
            if (response.status === 401 || response.status === 403) return { success: false, error: 'Database access denied. Check script permissions.' };

            return { success: false, error: `Database service error (${response.status})` };
        }

        return { success: true };
    } catch (error) {
        console.error(`[${context}] Network/Fetch Error:`, error);
        return { success: false, error: 'Network connection failed. Please check your internet.' };
    }
}

export async function submitFeedback(formData: FormData) {
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        grade: formData.get('grade') as string,
        message: formData.get('message') as string,
    };

    const scriptUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

    if (!scriptUrl) {
        console.error('GOOGLE_SHEET_WEBAPP_URL is not defined');
        return { success: false, error: 'Server configuration missing: GOOGLE_SHEET_WEBAPP_URL' };
    }

    return await postToAppsScript(scriptUrl, data, 'General Feedback');
}

export async function submitTestimonial(formData: FormData) {
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        grade: formData.get('phone') as string, // Also mapping phone to 'grade' here for compatibility
        message: formData.get('message') as string,
    };

    const scriptUrl = process.env.TESTIMONIALS_SHEET_WEBAPP_URL;

    if (!scriptUrl) {
        console.error('TESTIMONIALS_SHEET_WEBAPP_URL is not defined');
        return { success: false, error: 'Server configuration missing: TESTIMONIALS_SHEET_WEBAPP_URL' };
    }

    return await postToAppsScript(scriptUrl, data, 'Testimonial');
}

export async function submitContactForm(formData: FormData) {
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        grade: formData.get('phone') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
    };

    const scriptUrl = process.env.CONTACT_US_SHEET_WEBAPP_URL;

    if (!scriptUrl) {
        console.error('CONTACT_US_SHEET_WEBAPP_URL is not defined');
        return { success: false, error: 'Server configuration missing: CONTACT_US_SHEET_WEBAPP_URL' };
    }

    return await postToAppsScript(scriptUrl, data, 'Contact Us Inquiry');
}
