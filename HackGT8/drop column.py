#!/usr/bin/env python
# coding: utf-8

# In[2]:


import numpy as np
import pandas as pd

df=pd.read_csv("viz1.csv")
df.drop(columns=['Unnamed: 0'], axis=1, inplace=True)
df


# In[ ]:




