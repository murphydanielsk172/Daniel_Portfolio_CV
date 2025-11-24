# Portfolio Website
A simple customised portfolio created using React, Vite, and Tailwind CSS (Template Credit: lohitkolluri)

## Contact form configuration
- Create a `.env` file (based on `.env.example`) and ensure the EmailJS values match your account: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
- The defaults will fall back to the provided credentials (`service_u0adodl`, `template_m7vv8he`, `zZFJ8xQs9akvGwz08`) and send to `murphyskdaniel172@gmail.com` if no environment overrides are set.
- In EmailJS, confirm your template expects the fields `from_name`, `to_name`, `from_email`, `to_email`, and `message` to align with the form payload in `src/components/Contact.jsx`.
