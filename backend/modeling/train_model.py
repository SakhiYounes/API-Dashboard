import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
from sklearn.impute import SimpleImputer

# Load the preprocessed data
preprocessed_data = pd.read_csv('C:/API_Dashboard/backend/modeling/preprocessed_data.csv')

# Check for missing values
if preprocessed_data.isnull().any().any():
    # Use the SimpleImputer to fill missing values with the mean of the column
    imputer = SimpleImputer(strategy='mean')
    preprocessed_data = imputer.fit_transform(preprocessed_data)

# Split the data into training and testing sets
X_train, X_test = train_test_split(preprocessed_data, test_size=0.2, random_state=42)

# Standardize the data
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Train the K-means model
n_clusters = 4  # You can choose a different number of clusters
kmeans = KMeans(n_clusters=n_clusters, n_init=10, max_iter=300, tol=1e-4, random_state=42)
kmeans.fit(X_train)

# Evaluate the model
train_cluster_assignments = kmeans.predict(X_train)
test_cluster_assignments = kmeans.predict(X_test)

# Calculate silhouette scores
train_silhouette_score = silhouette_score(X_train, train_cluster_assignments)
test_silhouette_score = silhouette_score(X_test, test_cluster_assignments)

print(f"Train silhouette score: {train_silhouette_score}")
print(f"Test silhouette score: {test_silhouette_score}") 
