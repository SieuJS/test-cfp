import pandas as pd

# Read the CSV file using a semicolon as the delimiter
df = pd.read_csv('scimagojr 2023.csv', delimiter=';')

# Display the first few rows of the dataframe
print(df.head())