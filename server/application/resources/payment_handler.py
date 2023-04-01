from flask_restful import Resource
from flask import request
import json
from application.auth_token import token_validator
from application.business_logic.payments import Payment


class AddPayment(Resource):

    def post(self):
        data = request.get_json()['payment']
        response = Payment().add_payment(data)
        return response

    def get(self, id):
        response = {}
        events = Payment().get_payments_id(id)
        response['data'] = events
        return response