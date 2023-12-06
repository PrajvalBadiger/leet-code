#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    vector<int> topKFrequent(vector<int> &nums, int k) {
        unordered_map<int, int> mp;
        priority_queue<pair<int, int>, vector<pair<int, int>>, ComparePairs> pq;
        vector<int> res;

        // create a frequency map
        for (int num : nums) {
            mp[num]++;
        }

        // sort by frequency
        for (pair<int, int> val : mp) {
            pq.push(val);
        }

        // construct resulting array of k top frequent elements
        while (!pq.empty() && k-- > 0) {
            res.push_back(pq.top().first);
            pq.pop();
        }

        return res;
    }

  private:
    struct ComparePairs {
        bool operator()(const pair<int, int> &p1,
                        const pair<int, int> &p2) const {
            if (p1.second != p2.second) {
                return p1.second < p2.second;
            }
            // If second elements are equal, compare first elements
            return p1.first > p2.first;
        }
    };
};

int main() {
    Solution *sol = new Solution();

    int k = 2;
    vector<int> nums = {1, 1, 1, 2, 2, 3};
    vector<int> res = sol->topKFrequent(nums, k);

    for (const int val : res) {
        cout << val << " ";
    }
    cout << endl;

    return 0;
}
