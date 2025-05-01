Description
This project is a dynamic dashboard built using React and Tailwind CSS. The goal is to create a flexible dashboard where widgets can be managed dynamically. The dashboard allows users to:

1. Add and remove widgets from different categories.
2. Customize widgets by entering a name and description.
3. Integrate widgets into specific categories, allowing easy categorization and management.

The state of the dashboard is managed using Redux, enabling efficient updates and consistent UI rendering.

Features
1. Dynamic Widget Display :- The dashboard is generated dynamically from a JSON object that defines multiple categories. Each category can contain multiple widgets.
2. Add and Remove Widgets :- Users can add a widget by clicking on the +Add Widget button. This will prompt the user to enter a Widget Name and Widget Text, which will then be added to the selected category.Users can remove widgets from a category either by clicking on the cross icon on each widget or by unchecking the widget from the category list in the Add Category section.
3. Widget Categories :- Widgets are organized into different categories. Each category (e.g., CSPM Executive Dashboard) can contain multiple widgets.

Tech Stack

   Frontend:
   1. React.js
   2. Tailwind CSS
   3. Redux (for state management)
   4. React-Redux library (for integrating Redux with React)
      
Installation Instructions
1. Clone the repository:

   git clone https://github.com/yourusername/AccuKnox-Dashboard.git
2. Navigate to the project folder:

   cd AccuKnox-Dashboard
3. Install dependencies:
   
   npm install
4. Start the development server:

   npm run dev

The dashboard will now be accessible at http://localhost:5173.
