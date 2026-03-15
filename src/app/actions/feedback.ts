const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxvmn4WHHaDdH4mzJtlh2g9UFt0rXoSOBEaGiv-KX1yA8XmrSw9W12TX7RUuLaOMAEhVA/exec";
const TESTIMONIALS_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyMOj3_mJc83fkvHBc5qxrjDhsamhB5mkBdSm9u2ujhTtUQ-PRyezaDhKfbdP2KAOypdg/exec";
const CONTACT_US_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzw2Vw14IzvTtwh9feKDOfwNkV-F6FRx9m2JdZwp--qe1d2hNaEjAzgk827idB6-zheKQ/exec";

async function postToAppsScript(url: string, data: any, context: string) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toLocaleString(),
            }),
            redirect: 'follow',
            cache: 'no-store',
        });



        return { success: true };
    } catch (error) {
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
    return await postToAppsScript(GOOGLE_SHEET_WEBAPP_URL, data, 'General Feedback');
}

export async function submitTestimonial(formData: FormData) {
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        grade: formData.get('phone') as string,
        message: formData.get('message') as string,
    };
    return await postToAppsScript(TESTIMONIALS_SHEET_WEBAPP_URL, data, 'Testimonial');
}

export async function submitContactForm(formData: FormData) {
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        grade: formData.get('phone') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
    };
    return await postToAppsScript(CONTACT_US_SHEET_WEBAPP_URL, data, 'Contact Us Inquiry');
}