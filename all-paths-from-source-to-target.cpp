// The Solution uses Depth first search and Backtracking combined
// 1. choose a node and push to a path array
// 2. DFS on that node
// 3. undo the choice
// 4. when we reach the end (last node), push the path to result

#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>> &graph) {
        vector<vector<int>> ans;
        vector<int> path = {0};

        dfs(0, graph, path, ans);
        return ans;
    }

  private:
    void dfs(int node, vector<vector<int>> &graph, vector<int> &path,
             vector<vector<int>> &ans) {
        int N = graph.size();
        if (node == N - 1) {
            ans.push_back(path);
            return;
        }

        for (int neighbour : graph[node]) {
            path.push_back(neighbour);
            dfs(neighbour, graph, path, ans);
            path.pop_back();
        }
    }
};

int main() { return 0; }
