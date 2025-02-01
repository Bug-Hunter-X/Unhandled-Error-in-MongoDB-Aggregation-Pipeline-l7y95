```javascript
// Assuming you have a MongoDB connection established

db.collection('myCollection').aggregate([
  { $match: { field: 'value' } },
  { $group: { _id: '$anotherField', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
]).toArray((err, result) => {
  if (err) {
    console.error('Aggregation error:', err);
  } else {
    console.log('Top 10:', result);
  }
});
```