#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    vector<int> kWeakestRows(vector<vector<int>> &mat, int k) {

        // 1. get the no. of soldiers - using linear search/binary search
        vector<pair<int, int>> soldiers(mat.size(), {0, 0});
        for (size_t row = 0; row < mat.size(); row++) {
            soldiers[row].second = row;
            for (size_t j = 0; j < mat[0].size(); j++) {
                if (mat[row][j] == 1)
                    soldiers[row].first++;
                else
                    break;
            }
        }

        // 2. sort the array
        priority_queue<pair<int, int>> pq;
        for (size_t i = 0; i < soldiers.size(); i++) {
            soldiers[i].first *= -1;
            soldiers[i].second *= -1;
            pq.push(soldiers[i]);
        }

        // 3. return k kWeakestRows
        vector<int> k_weakest_rows;
        int i = 0;
        while (k-- > 0 && !pq.empty()) {
            k_weakest_rows.push_back(-1 * pq.top().second);
            pq.pop();
        }

        return k_weakest_rows;
    }
};

int main() {
    Solution *sol = new Solution();
    vector<vector<int>> mat = {{1, 1, 0, 0, 0},
                               {1, 1, 1, 1, 0},
                               {1, 0, 0, 0, 0},
                               {1, 1, 0, 0, 0},
                               {1, 1, 1, 1, 1}};

    int k = 3;
    vector<int> k_weakest_rows;

    k_weakest_rows = sol->kWeakestRows(mat, k);

    for (auto weak : k_weakest_rows) {
        cout << weak << ", ";
    }
    cout << endl;

    return 0;
}
