// Solution uses:
// 1. Hashmap for calculating frequency
// 2. Priority queue for sorting
// using a custom compare function to sort Lexicographically if the frequencies
// are same

#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    vector<string> topKFrequent(vector<string> &words, int k) {

        unordered_map<string, int> word_freq;
        priority_queue<pair<string, int>, vector<pair<string, int>>,
                       compare_freq>
            pq;

        vector<string> res;

        // create map
        for (const string word : words) {
            word_freq[word]++;
        }

        // create priority_queue
        for (auto val : word_freq) {
            pq.push(val);
        }

        // extract top k elements from the priority_queue
        while (!pq.empty() && k-- > 0) {
            res.push_back(pq.top().first);
            pq.pop();
        }

        return res;
    }

  private:
    struct compare_freq {
        bool operator()(const pair<string, int> &p1,
                        const pair<string, int> &p2) const {
            if (p1.second != p2.second) {
                return p1.second < p2.second; // compare frequency
            }

            return p1.first > p2.first; // Lexicographical order
        }
    };
};

int main() {

    Solution *sol = new Solution();
    vector<string> res;
    vector<string> words = {"i", "love", "leetcode", "i", "love", "coding"};
    int k = 2;
    res = sol->topKFrequent(words, k);

    for (string str : res) {
        cout << str << endl;
    }
    cout << endl;

    words = {"the", "day", "is",    "sunny", "the",
             "the", "the", "sunny", "is",    "is"};
    k = 4;
    res = sol->topKFrequent(words, k);

    for (string str : res) {
        cout << str << endl;
    }
    cout << endl;

    return 0;
}
