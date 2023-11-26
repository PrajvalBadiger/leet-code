#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int findCenter(vector<vector<int>> &edges) {
        // since the graph is a valid star graph, return common edge in first
        // and second edges
        return edges[0][0] == edges[1][0]
                   ? edges[0][0]
                   : (edges[0][0] == edges[1][1] ? edges[0][0] : edges[0][1]);
    }
};

int main() {
    Solution sol = Solution();

    return 0;
}
