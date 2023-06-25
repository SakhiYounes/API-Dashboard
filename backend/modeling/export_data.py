import pymongo
import pandas as pd

# Replace the following with your MongoDB connection details
MONGO_URI = "mongodb+srv://sakhiyounes:159753@api.ai6qzb2.mongodb.net/test"
DATABASE_NAME = "mydb"

# List of collection names to export
COLLECTIONS = [
    "connexion",
    "daba_daba",
    "demande_chequier",
    "demande_lcn",
    "opposition_carte",
    "paiement_facture_recharge",
    "virement"
]

client = pymongo.MongoClient(MONGO_URI)
db = client[DATABASE_NAME]

# Initialize an empty list to store DataFrames
dfs = []

# Iterate through the collections and export the data
for collection_name in COLLECTIONS:
    print(f"Processing collection: {collection_name}")  # Add a print statement here
    # Fetch data from the MongoDB collection and convert it to a DataFrame
    collection = db[collection_name]
    data = list(collection.find())
    df = pd.DataFrame(data)
    
    # Add a new column to store the transaction_type (collection name)
    df['transaction_type'] = collection_name

    # Append the DataFrame to the list
    dfs.append(df)

# Combine all DataFrames in the list
combined_df = pd.concat(dfs, ignore_index=True)

# Save the combined DataFrame to a CSV file
combined_df.to_csv('C:/API_Dashboard/backend/modeling/combined_data.csv', index=False)
print("Data exported successfully")  # Add a print statement here