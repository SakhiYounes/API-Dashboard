import pandas as pd
from sklearn.preprocessing import OneHotEncoder, StandardScaler

# Load the CSV file into a DataFrame
data = pd.read_csv('C:/API_Dashboard/backend/modeling/combined_data.csv')

# Convert date strings to datetime objects
data['date'] = pd.to_datetime(data['date'], format='%m/%d/%Y')

# Extract useful features from the date 
data['day_of_week'] = data['date'].dt.dayofweek
data['day_of_month'] = data['date'].dt.day
data['month'] = data['date'].dt.month

# Drop unnecessary columns
columns_to_drop = ['_id', '_class', 'motif_echec', 'motif', 'date', 'reference', 'reference_chequier', 'reference_lcn', 'num_compte', 'num_tiers', 'num_carte']
data = data.drop(columns_to_drop, axis=1)

# Encode categorical variables using one-hot encoding
categorical_features = ['canal', 'day_of_week', 'day_of_month', 'month', 'marche', 'statut', 'transaction_type', 'format', 'option', 'facturier', 'service']
encoded_features = []
for feature in categorical_features:
    encoder = OneHotEncoder()
    encoded_feature = encoder.fit_transform(data[feature].values.reshape(-1, 1)).toarray()
    num_categories = encoded_feature.shape[1]
    category_labels = [f"{feature}_{i}" for i in range(num_categories)]
    encoded_feature_df = pd.DataFrame(encoded_feature, columns=category_labels)
    encoded_features.append(encoded_feature_df)

# Concatenate the encoded features into a single DataFrame
encoded_data = pd.concat(encoded_features, axis=1)

# Drop original categorical columns
data = data.drop(categorical_features, axis=1)

# Concatenate the preprocessed data and the encoded features
preprocessed_data = pd.concat([data, encoded_data], axis=1)

# Get the data types of each column in the numpy array
dtypes = preprocessed_data.dtypes

# Find columns that are not numeric
non_numeric_cols = [col for col in dtypes.index if not pd.api.types.is_numeric_dtype(dtypes[col])]

# Drop the non-numeric columns from the numpy array
preprocessed_data = preprocessed_data.drop(non_numeric_cols, axis=1)

# Save the preprocessed data to a new CSV file
preprocessed_data.to_csv('C:/API_Dashboard/backend/modeling/preprocessed_data.csv', index=False)
