const fs = require('fs');
const path = require('path');



const sendConferenceData = async (conferenceData) => {
    console.log("Data being sent:", conferenceData);

    try {
        const response = await fetch('http://172.188.50.15:8080/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'from-server': 'true', // Đánh dấu đây là yêu cầu từ server
            },
            body: JSON.stringify(conferenceData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("Response Data: ", responseData);
        const filePath = path.join(__dirname, 'responseData.json');
        fs.writeFile(filePath, JSON.stringify(responseData, null, 2), (err) => {
            if (err) {
                console.error("Error saving response data:", err.message);
            } else {
                console.log("Response data saved to responseData.json");
            }
        });
    } catch (error) {
        console.error("Error sending data:", error.message);
    }
    
};

// Ví dụ dữ liệu JSON gửi đi
const sampleData = 
    [
        {
          "Title": "ACM Multimedia",
          "Acronym": "ACMMM"
        },
        {
          "Title": "International Conference on Ambient Systems, Networks and Technologies",
          "Acronym": "ANT"
        }
      ];


sendConferenceData(sampleData);