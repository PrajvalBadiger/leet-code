// Solution uses Sieve of Eratosthenes
// It is an algorithm to find all primes upto a given number
// References: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

#include <bits/stdc++.h>
using namespace std;

class Solution {
  public:
    int countPrimes(int n) {
        vector<bool> a(n, true);
        vector<int> primes;

        for (size_t i = 2; i < sqrt(n); i++) {
            if (a[i]) {
                for (size_t j = i * i; j < n; j += i) {
                    a[j] = false;
                }
            }
        }

        for (size_t i = 2; i < n; i++) {
            if (a[i]) {
                primes.push_back(i);
            }
        }

        return primes.size();
    }
};

int main() {
    Solution *sol = new Solution();

    cout << sol->countPrimes(10) << endl;
    cout << sol->countPrimes(0) << endl;
    cout << sol->countPrimes(1) << endl;
    cout << sol->countPrimes(858232) << endl;
    return 0;
}
