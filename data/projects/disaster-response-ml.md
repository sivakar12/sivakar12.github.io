---
title: "Diaster Response ML Pipeline - Udacity"
emoji: "📊"
date: "2021-07-07"
shortDescription: "A multilabel classification model I built as part of Udacity Data Scientist Nanodegree"
screenshotUrls: []
links:
  - title: "Repository"
    url: "https://github.com/sivakar12/udacity-disaster-response-ml-project"
  - title: "Jupyter Notebook"
    url: "https://github.com/sivakar12/udacity-disaster-response-ml-project/blob/main/Exploration.ipynb"
---

This is a project I am doing as part of the Udacity Data Scientist Nanodegree program The core of this project is a machine learning classifier that reads messages coming during a disaster and classifies them into categories so they can be routed to the appropriate responder.

It is a multilabel classification. The classification uses Bag of Words and TF-IDF techniques to model the text and there are data cleaning, tokenizing, stemming and lemmatizing tasks. The classifier is built making use of the pipeline features of Scikit Learn and Grid Search Cross Validation is used to tune the parameters 