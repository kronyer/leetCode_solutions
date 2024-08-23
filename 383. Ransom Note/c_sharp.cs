using System;
using System.Collections.Generic;

public class Solution
{
    public bool CanConstruct(string ransomNote, string magazine)
    {
        var count = new Dictionary<char, int>();

        foreach (char c in magazine)
        {
            if (!count.ContainsKey(c))
            {
                count[c] = 0;
            }
            count[c]++;
        }

        foreach (char c in ransomNote)
        {
            if (!count.ContainsKey(c) || count[c] == 0)
            {
                return false;
            }
            count[c]--;
        }
        return true;
    }
}
