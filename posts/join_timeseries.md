---
title: "Practical guides to joining time series"
date: "2020-01-02"
---

Pandas is a popular Python library for data manipulation and analysis. One of the most useful functions in pandas is merge_asof(), which can be used to merge two tables on a common key while accounting for the time-based relationship between the keys.

For example, suppose we have two tables sales and marketing with the following data:

```python
import pandas as pd

sales = pd.DataFrame({
'date': ['2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01'],
'sales': [100, 200, 300, 400]
})

marketing = pd.DataFrame({
'date': ['2021-01-01', '2021-02-15', '2021-03-15'],
'campaign': ['A', 'B', 'C']
})
```

The sales table contains the monthly sales figures, while the marketing table contains the start dates of marketing campaigns. We want to merge these two tables on the date column, while accounting for the fact that marketing campaigns may start in the middle of a sales month.

To do this, we can use the merge_asof() function, like this:

```python
merged = pd.merge_asof(sales, marketing, on='date', direction='forward')
```

The on parameter specifies the common key to merge on, which in this case is date. The direction parameter specifies the direction of the merge, which we set to 'forward' to indicate that we want to match the closest marketing campaign start date that is on or after the sales date.

The resulting merged table will contain the following data:

```yaml
date  sales campaign
0  2021-01-01    100        A
1  2021-02-01    200        A
2  2021-03-01    300        C
3  2021-04-01    400        C
```

In this example, the first marketing campaign started on January 1, so the `campaign` column for January sales is `'A'`. The second marketing campaign started on February 15, which is after the February sales date, so the campaign column for February sales is also `'A'`. The third marketing campaign started on March 15, which is after the March sales date, so the campaign column for March sales is `'C'`. The fourth sales date is after the end of the last marketing campaign, so the campaign column for April sales is also `'C'`.

In conclusion, the `merge_asof()` function in pandas is a powerful tool for merging two tables on a common key while accounting for time-based relationships. It is especially useful when dealing with data that has irregular time intervals or when data is recorded at different frequencies. By using this function, you can ensure that your merged data accurately reflects the temporal relationship between the two tables.
