cqlsh -u 'yakub' -p ‘hackreactor’ -f 'cschema.cql' 127.0.0.1

cqlsh -e "COPY reviews_by_listing(listing_id,review_id,username,image,dateNum,description) FROM '/Users/jacobjohnsonrr/HRSF130/SDC/review-service/database/cassandra/CSV/reviewsByListing.csv' WITH HEADER=TRUE;"