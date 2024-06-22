

# Make all tests pass

# Return whether the
# number exists in the list
def exists( n: int, numbers: [int] ) -> bool: 
   for i in range( len( numbers ) ): 
      if numbers[i] == n:
         return True
      
   return False

print( exists( 5, [ 1, 2, 3, 4, 5 ] ) == True )
print( exists( 6, [ 1, 2, 3, 4, 5 ] ) == False )
print( exists( 3, [ 1, 2, 3, 4, 5 ] ) == True )
print( exists( 5, [] ) == False )