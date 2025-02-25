import {
    Project,
    SyntaxKind,
    ObjectLiteralExpression,
    ArrayLiteralExpression,
} from "ts-morph";

console.clear();

// Initialize a project (adjust the tsconfig path as needed)
const project = new Project({
    tsConfigFilePath: "./tsconfig.json",
});

// Load the source file you want to modify
// Replace 'src/data.ts' with the path to your TypeScript file
const sourceFile = project.getSourceFileOrThrow(
    "src/components/games.information.tsx"
);

// Find the variable declaration named 'GamesInformation'
const variableDeclaration =
    sourceFile.getVariableDeclaration("GamesInformation");
if (!variableDeclaration) {
    console.error("Variable 'GamesInformation' not found in the source file.");
    process.exit(1);
}

// Get the initializer; we expect it to be an array literal
const initializer = variableDeclaration.getInitializer();
if (
    !initializer ||
    initializer.getKind() !== SyntaxKind.ArrayLiteralExpression
) {
    console.error(
        "The initializer for 'GamesInformation' is not an array literal."
    );
    process.exit(1);
}

// Now that we know it’s an array literal, cast it appropriately
const arrayLiteral = initializer.asKind(SyntaxKind.ArrayLiteralExpression);

// Get all elements from the array literal
const elements = arrayLiteral.getElements();

// Helper function: Extract the sort key from an element.
// Adjust this if your objects have a different structure or property.
function getSortKey(element: any): number {
    // We expect each element to be an object literal
    if (element.getKind() === SyntaxKind.ObjectLiteralExpression) {
        const objLiteral = element as ObjectLiteralExpression;
        // Look for the property assignment named 'id'
        const idProp = objLiteral.getProperty("id");
        if (idProp && idProp.getKind() === SyntaxKind.PropertyAssignment) {
            // Get the initializer (the value) of the property
            const initializer = idProp.getFirstDescendantByKind(
                SyntaxKind.NumericLiteral
            );
            if (initializer) {
                return initializer.getLiteralValue();
            }
        }
    }
    // Fallback: return an empty string if the structure isn’t as expected
    return 0;
}

// Sort the elements by the 'id' property
const sortedElements = elements.sort((a, b) => {
    const keyA = getSortKey(a);
    const keyB = getSortKey(b);
    const sortValue = keyA > keyB ? 1 : keyA < keyB ? -1 : 0;
    return sortValue;
});

// Replace the array literal's elements with the sorted ones.
// We map each element back to its source text.

const sortedArrayText = `[${sortedElements
    .map((el) => el.getText())
    .join(", ")}]`;

// Replace the entire initializer text with the sorted array
arrayLiteral.replaceWithText(sortedArrayText);

// Save changes back to the source file
sourceFile.saveSync();

console.log("Array sorted and file updated successfully!");
