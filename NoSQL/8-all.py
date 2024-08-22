#!/usr/bin/env python3
"""function that lists all documents in a collection"""


def list_all(mongo_collection):
    """function that lists all documents in a collection"""
    doc = mongo_collection.find()
    return list(doc)
