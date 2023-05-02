from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from os import environ

Base = declarative_base()


class Sentence(Base):
    __tablename__ = environ["DB_SENTENCE_TABLE"]

    id = Column(Integer, primary_key=True)
    sentence = Column(String(150), unique=False, nullable=False)
    source = Column(String(150), unique=False, nullable=False)

    def __repr__(self):
        return f"<Sentence {self.sentence} {self.source}>"

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
