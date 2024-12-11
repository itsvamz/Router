# Use an official Python runtime as the base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's code
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run the application
CMD ["python", "run.py"]

RUN pip install tensorflow==2.18.0


