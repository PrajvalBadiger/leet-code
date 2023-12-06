#include <bits/stdc++.h>
#include <cstdlib>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
  public:
    string frequencySort(string s) {
        unordered_map<char, int> mp;
        priority_queue<pair<char, int>, vector<pair<char, int>>, ComparePairs>
            pq;
        string res;

        // create frequency map for each char
        for (char ch : s) {
            mp[ch]++;
        }

        // sort the chars using priority_queue
        for (auto val : mp) {
            pq.push(val);
        }

        // construct the resultant string
        while (!pq.empty()) {
            pair<char, int> val = pq.top();
            for (size_t i = 0; i < val.second; i++) {
                res.push_back(val.first);
            }
            pq.pop();
        }

        return res;
    }

  private:
    struct ComparePairs {
        bool operator()(const pair<char, int> &p1,
                        const pair<char, int> &p2) const {
            // Compare second elements in descending order
            if (p1.second != p2.second) {
                return p1.second < p2.second;
            }
            // If second elements are equal, compare first elements
            // lexicographically
            return p1.first > p2.first;
        }
    };
};

int main() {
    Solution *sol = new Solution();

    string s = sol->frequencySort("tree");
    cout << s << endl;

    s = sol->frequencySort("cccaaa");
    cout << s << endl;

    return 0;
}
