import sys

def solve(eq, var='x'):
  eq1 = eq.replace("=", "-(")+")"
  eq1 = eq1.replace("x", "*x")
  eq1 = eq1.replace("+*x", "+x")
  eq1 = eq1.replace("-*x", "-x")
  eq1 = eq1.replace("(*x", "(x")
  print(eq1)
  c = eval(eq1, {var: 1j})
  return -c.real/c.imag

def main(argv):
    # Arguments
    result = solve(argv[1])
    print(result)
    sys.exit(0)


if __name__ == "__main__":
    main(sys.argv)
