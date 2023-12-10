#include <vector>
using namespace std;

class Solution {
  public:
    int findCircleNum(vector<vector<int>> &isConnected) {

        int n = isConnected.size();
        int count = 0;
        vector<bool> visited(n, false);

        for (size_t i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i, n, isConnected, visited);
            }
        }
        return count;
    }

  private:
    void dfs(int node, int n, vector<vector<int>> &isConnected,
             vector<bool> &visited) {
        visited[node] = true; // visit the current node

        for (size_t i = 0; i < n; i++) {
            // if the node is connected and the node is not yet visited
            if (isConnected[node][i] && !visited[i])
                dfs(i, n, isConnected, visited);
        }
    }
};
