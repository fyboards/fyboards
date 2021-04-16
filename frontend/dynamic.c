
#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <sys/types.h>
#include <sys/mman.h>

/**
* Helper function to execute dynamic code.
*
* @param code a pointer to the code to execute
* @param length the length of the code
* @return true if the code run successfully, otherwise false
*/
bool run_code(const void* code, size_t length)
{
	// Allocate new memory for code execution.
	// We don't set the execute flag because we won't want to
	// open doors to malicious software.
	void* dynMemory = mmap(0, length, PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
	if (dynMemory == MAP_FAILED)
	{
		printf("Alloc Error\n");
		return false;
	}

	// Copy code to new memory.
	memcpy(dynMemory, code, length);

	// Change protection.
	// We remove the write flag and set the execute flag on that page.
	if (mprotect(dynMemory, length, PROT_EXEC))
	{
		printf("Protect Error\n");
		return false;
	}

	// Call the new function in memory.
	int result = ((int (*)(void))dynMemory)();
	printf("Result: %d\n", result);

	// At the end we free the memory.
	if (munmap(dynMemory, length))
	{
		printf("Free Error\n");
		return false;
	}

	return true;
}

/**
* Entrypoint of the program.
*
* @return exit code of the program, 0 if successful,
*		  -1 in case of an error
*/
int main(void)
{
	// Define the code we want to execute
	const char code[] = {
		0xc3								// ret
	};

	// Run the code
	if (!run_code(code, sizeof code)) {
		return -1;
	}
	return 0;
}
