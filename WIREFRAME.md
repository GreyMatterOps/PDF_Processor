# PDF Processor – Wireframe Specification (v1)

## 1. Overview
A simple single-file PDF processing tool that allows users to upload a PDF, choose one processing option, and generate a modified output file.

---

## 2. Layout Structure

### Header
- Title: **PDF Processor**

---

### Section 1: File Upload
- Component: File Upload Button
- Label: **Upload PDF (Single File Only)**
- Behavior:
  - Accepts only one PDF file
  - Replaces previous file if a new one is uploaded

---

### Section 2: File Status & Preview
- Component: Status Display
  - States:
    - Pending
    - Processing
    - Success
    - Error

- Component: Preview Button
  - Label: **Preview Uploaded PDF**
  - Behavior:
    - Opens PDF in viewer/modal

---

### Section 3: Processing Options
- Component: Radio Button Group (Single Selection Only)

Options:
1. **Odd-Even Page Separator**
   - Splits PDF into odd and even pages

2. **Page Order Reverser**
   - Reverses the page order of the PDF

---

### Section 4: Execute Action
- Component: Primary Button
- Label: **Run / Process PDF**
- Behavior:
  - Disabled until:
    - File is uploaded
    - One option is selected
  - On click:
    - Sends file + selected option to backend
    - Updates status to "Processing"

---

### Section 5: Output Actions
- Component: Download Button
- Label: **Download Processed PDF**
- Behavior:
  - Enabled only when status = Success
  - Downloads processed file

---

## 3. User Flow
1. User uploads a PDF file
2. User selects one processing option
3. User clicks "Run / Process PDF"
4. System processes file and updates status
5. User previews result (optional)
6. User downloads processed PDF

---

## 4. Validation Rules
- Only PDF files allowed
- Only one file at a time
- Must select one processing option
- Show error message for invalid file or processing failure

---

## 5. Future Enhancements (Optional)
- Multiple file upload support
- Additional PDF operations (merge, split, compress)
- Drag-and-drop upload
- Progress bar for large files

---

## 6. Notes
- Keep UI minimal and responsive
- Ensure clear feedback for all user actions
- Maintain separation between UI, processing logic, and file handling
