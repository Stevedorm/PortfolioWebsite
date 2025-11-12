
document.getElementById('downloadBtn').addEventListener('click', async () => {
    try {
        // Same-origin URL (must be accessible from the page)
        const url = '/files/CyberResume.docx';
    
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Network response was not ok');
    
        const blob = await resp.blob();
        const filename = 'Steven-Dormady-CyberResume.docx';
    
        // Create temporary link and trigger download
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(blobUrl);
    } catch (err) {
        console.error('Download failed', err);
        alert('Could not download file. Check console for details.');
    }
    });