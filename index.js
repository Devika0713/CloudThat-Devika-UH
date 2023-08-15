
document.addEventListener("DOMContentLoaded", function() {
    const message = [
        "Celebrating Unity in Diversity!",
        "Strength in our Diversity!",
        "United in Diversity!",
        "Harmony in our Differences!",
        "One Nation, Many Cultures!",
        "Embracing our Diverse Heritage!"
    ];

    const messageDisplay = document.querySelector(".lead");
    const changeMessageBtn = document.getElementById("changeMessageBtn");

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * message.length);
        return message[randomIndex];
    }

    changeMessageBtn.addEventListener("click", function() {
        const newMessage = getRandomMessage();
        messageDisplay.textContent = newMessage;
        console.log(newMessage);
    });

    const names = [
        "Aditi Sharma",
        "Arjun Patel",
        "Ayesha Khan",
        "Deepak Choudhury",
        "Zara Rao",
        "Raj Malhotra",
        "Meera Iyer",
        "Sahil Singh",
        "Kavya Desai",
        "Sameer Kumar",
        "Kiran Kapoor",
        "Rohit Nair",
        "Maya Das",
        "Vikram Reddy",
        "Swara Verma",
        "Ankit Gupta",
        "Ananya Mehta",
        "Rahul Jain",
        "Nandini Chauhan",
        "Amar Singh",
        "Radhika Patel",
        "Akash Kumar",
        "Amina Sheikh",
        "Rahul Dubey",
        "Tanvi Agarwal",
        "Karan Singh",
        "Anika Das",
        "Armaan Ali",
        "Priya Singh",
        "Arjun Rana",
        "Anjali Joshi",
        "Sahil Khanna",
        "Fatima Begum",
        "Shubhangi Patil",
        "Surya Rajan",
        "Arif Ansari",
        "Nisha Mohan",
        "Vivek Rao",
        "Aisha Ahmed",
        "Shubham Sharma",
        "Ritu Yadav",
        "Nikhil Verma",
        "Pooja Chatterjee",
        "Amar Singh",
        "Jasbir Singh",
        "Simran Kaur",
        "Aditya Kapoor",
        "Nisha Agrawal",
        "Aman Singh",
        "Armaan Khan",
        "Aisha Khan",
        "Kunal Mehta",
        "Maya Iyer",
        "Rohit Choudhury",
        "Sana Khan",
        "Gaurav Sharma",
        "Leela Gupta",
        "Arjun Tiwari",
        "Nikhil Yadav",
        "Sameer Singh",
        "Nisha Tiwari",
        "Vivek Dubey",
        "Priya Khanna",
        "Rahul Das",
        "Simran Verma",
        "Sahil Kumar",
        "Priya Chauhan",
        "Varun Verma",
        "Kavita Sharma",
        "Neha Nair",
        "Mayank Patel",
        "Ayesha Sheikh",
        "Ravi Malhotra",
        "Zoya Khan",
        "Rishi Kapoor",
        "Shalini Sharma",
        "Amit Gupta",
        "Pooja Rawat",
        "Ankita Singh",
        "Amit Kumar",
        "Rohit Verma",
        "Anjali Rana",
        "Aryan Choudhury",
        "Kiran Mehta",
        "Aditya Sharma",
        "Sneha Verma",
        "Vikram Nair",
        "Kritika Patel",
        "Rohit Chauhan",
        "Sana Khan",
        "Rahul Verma",
        "Neha Iyer",
        "Manpreet Singh",
        "Sakshi Kapoor",
        "Amit Malhotra",
        "Sanya Gupta",
        "Harbhajan Singh",
        "Varsha Iyer",
        "Veer Singh"
    ];
    
    function getRandomPosition() {
        const x = Math.random() * 1080;
        const y = Math.random() * 1920;
        return { x, y };
    }
    
    function getRandomOpacity() {
        return Math.random() * 0.8 + 0.2; // Opacity between 0.2 and 1
    }
    
    function displayRandomName() {
        const nameContainer = document.getElementById("nameContainer");
    
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomPosition = getRandomPosition();
        const randomOpacity = getRandomOpacity();
    
        const nameElement = document.createElement("p");
        nameElement.textContent = randomName;
        nameElement.classList.add("name");
        nameElement.style.right = `${randomPosition.x}px`;
        nameElement.style.bottom = `${randomPosition.y}px`;
        nameElement.style.opacity = randomOpacity;
    
        nameContainer.appendChild(nameElement);
        
       
        // Fade in
        setTimeout(() => {
            nameElement.style.transition = "opacity 1s";
            nameElement.style.opacity = "1";
        }, 100);
    
        // Fade out and remove after 8 seconds
        setTimeout(() => {
            nameElement.style.opacity = "0";
            setTimeout(() => {
                nameContainer.removeChild(nameElement);
            }, 1000);
        }, 8000);
    }
    
    // Call the function every 4 seconds
    setInterval(displayRandomName, 200);
    

});





