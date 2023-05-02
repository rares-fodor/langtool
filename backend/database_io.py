from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from os import environ

from models import Sentence


engine = create_engine(f'postgresql://{environ["DB_USER"]}:{environ["DB_PASS"]}@{environ["DB_HOST"]}/{environ["DB_SENTENCE_TABLE"]}')
Session = sessionmaker(bind=engine)
session = Session()


def search_sentence(fragment: str):
    """
    Performs a query matching fragment with word boundaries
        SELECT * FROM sentences WHERE sentence ~* '\m{query}\M';

    Returns a list of the matching rows as dictionaries
    """
    query = session.query(Sentence).filter(Sentence.sentence.op("~*")(f"\m{fragment}\M")).all()
    return [s.as_dict() for s in query]

