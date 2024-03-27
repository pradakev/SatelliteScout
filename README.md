# SatelliteScout

**Description:**
SatelliteScout is a web application designed to help users locate satellites in their vicinity based on their current location. The application utilizes Flask, Bootstrap, and JavaScript to provide a user-friendly interface for accessing satellite information.

**Features:**
- **User Location Detection:** Users can easily retrieve their current location with the click of a button, using the browser's geolocation feature.
- **Input Coordinates:** Users also have the option to input specific coordinates to find satellites near a particular location.
- **Display Satellite Information:** The application displays the latitude, longitude, and accuracy of the user's location.
- **Future Integration:** The project aims to integrate with a TLE (Two-Line Element) API to provide real-time data on nearby satellites based on the user's location.

**Installation:**
1. Clone the repository: `git clone https://github.com/SatelliteScout.git`
2. Navigate to the project directory: `cd SatelliteScout`
3. Install the required dependencies: `pip install -r requirements.txt`
4. Run the Flask application: `python app.py`
5. Access the application in your web browser at `http://localhost:5000`

**Usage:**
1. Upon accessing the application, users will see the SatelliteScout logo and two buttons: "Get My Location" and "Input Coordinates."
2. Clicking on "Get My Location" will retrieve the user's current latitude, longitude, and accuracy.
3. Alternatively, users can input specific coordinates by clicking on "Input Coordinates" and entering the desired latitude and longitude.
4. The application will display the retrieved location information along with any nearby satellites.

**Future Enhancements:**
1. Integration with TLE API: Implementing a TLE API to fetch real-time satellite data based on the user's location.
2. Enhanced UI/UX: Improving the user interface and experience to make the application more intuitive and visually appealing.
3. Additional Features: Adding features such as satellite tracking, satellite details, and filtering options for a richer user experience.

**Contributing:**
Contributions to SatelliteScout are welcome! Feel free to fork the repository, make improvements, and submit pull requests.

**License:**
This project is licensed under the [MIT License](LICENSE).

**Acknowledgments:**
- Bootstrap for providing the responsive design framework.
- Flask for the web application framework.
- JavaScript for enabling dynamic content and interaction.
- Open-source satellite data providers for making satellite information accessible.
