# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE=cohesyve_assessment.settings

# Argument that defines the environment
ARG ENVIRONMENT

# Create and set the working directory
RUN mkdir /code
WORKDIR /code

# Copy the current directory contents into the container at /code
COPY . /code/

# Create a Conda environment based on the environment.yml file
# RUN conda env create -f cohesyve_assessment.yml

# # Activate the Conda environment
# RUN echo "source activate cohesyve_assessment" > ~/.bashrc
# SHELL ["/bin/bash", "-c"]
# ENV PATH /opt/conda/envs/cohesyve_assessment/bin:$PATH
# ENV LD_LIBRARY_PATH /opt/conda/envs/cohesyve_assessment/lib:$LD_LIBRARY_PATH

RUN pip install -r requirements.txt

# Expose port 8000 for Django development server
EXPOSE 8000

# Set the entrypoint script

COPY entrypoint-development.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]