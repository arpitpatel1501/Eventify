from flask_restful import Resource
from flask import request
import json
from application.auth_token import token_validator
from application.business_logic.organizers import Organizer

class OrganizersEndpoint(Resource):
    def get(self):
        response = {}
        organizers = Organizer().get_all_organizer()
        response['data'] = organizers
        return response

class OrganizerEndPoint(Resource):
    def post(self):
        data = request.get_json()
        response = Organizer().add_organizer(data)
        return response

    def get(self,id):
        

class UnauthenticateOrganizerEndPoint(Resource):
    def get(self):
        response = {}
        unauthenticate_organizers = Organizer().get_authentication_requests()
        response['data'] = unauthenticate_organizers
        return response