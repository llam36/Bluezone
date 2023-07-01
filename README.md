# BlueZone💉
## 🌲Inspiration
We are incredibly saddened by the fact that misinformation around the Covid-19 vaccines remains prevalent, which has caused many unfortunate and unnecessary deaths from unvaccinated patients, as detailed by the Washington Post. Thus for HackGT8, we want to build something that will help reduce Covid-19 misinformation on social media, thus leading to our idea of BlueZone.

## 🌲What it does
Ideally, BlueZone is a dashboard that collects Twitter tweets regarding the Covid-19 vaccine and vaccine-related misinformation in the background and visualizes the prevalence of and vulnerability to Covid-19 vaccine misinformation across the 50 US States. In particular, it will automatically calculate and visualize what particular misinformation topic is currently prevalent for each state and also how vulnerable each state is to misinformation based on their current vaccination rate and vaccine misinformation rate.

## 🌲How we built it
We performed all Tweet-gathering via the Twitter API and derivation of key metrics using Python (pandas, tweepy, numpy). To collect tweets on Covid-19 vaccine misinformation, we identify common terms that are extremely likely to be associated with vaccine misinformation, on top of generic Covid vaccine search terms. After calculating the score of 4 key metrics for each state, we export this data to a CSV file, which will then be used for visualization using the d3.js library.

## 🌲Challenges we ran into
One early challenge we found was that not all users self-report their location data (a key criterion for visualization). Furthermore, since user location is self-reported, the location format is highly variable and requires careful parsing to retrieve the state where the user resides (or None if the user resides elsewhere).

## 🌲Accomplishments that we're proud of
We are extremely proud of the fact that we managed to finish extracting data and building 4 interactive visualizations for key metrics regarding COVID vaccine misinformation from the 155000 tweets gathered over a period of 24 hours, which we hope will be useful for public health officials to help strategize their outreach efforts against COVID misinformation.

## 🌲What's next for Bluezone
We hope to turn Bluezone into a full-fledged web dashboard that can be expanded to other areas of medical misinformation.

## 🌲Tech Stack
![D3.js](https://img.shields.io/badge/d3.js-a?style=for-the-badge&logo=d3dotjs&logoColor=white&color=F9A03C)
![JavaScript](https://img.shields.io/badge/javascript-a?style=for-the-badge&logo=javascript&logoColor=F7DF1E&color=231F40)
![NLTK](https://img.shields.io/badge/natural%20language%20toolkit-a?style=for-the-badge&logo=python&logoColor=white&color=yellow)
![Numpy](https://img.shields.io/badge/numpy-a?style=for-the-badge&logo=numpy&logoColor=white&color=013243)
![Pandas](https://img.shields.io/badge/pandas-a?style=for-the-badge&logo=pandas&logoColor=white&color=darkblue)
![Python](https://img.shields.io/badge/python-a?style=for-the-badge&logo=python&logoColor=white&color=yellow)
![React](https://img.shields.io/badge/react-a?style=for-the-badge&logo=react&logoColor=white&color=darkred)
![Twitter](https://img.shields.io/badge/twitter%20api-a?style=for-the-badge&logo=twitter&logoColor=white&color=blue)

## 🌲Tool Installation
![Git](https://img.shields.io/badge/git-a?style=for-the-badge&logo=git&logoColor=white&color=F05032)
![VSCode](https://img.shields.io/badge/vscode-a?style=for-the-badge&logo=visualstudiocode&logoColor=white&color=007ACC)
