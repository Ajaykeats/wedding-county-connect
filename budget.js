
// Budget tracking functionality
let totalBudget = 0;
let budgetItems = [];

document.addEventListener('DOMContentLoaded', function() {
    // Template selection
    const templateCards = document.querySelectorAll('.template-card');
    const budgetTracker = document.getElementById('budget-tracker');
    const budgetForm = document.getElementById('budget-form');

    templateCards.forEach(card => {
        const selectButton = card.querySelector('.template-select');
        selectButton.addEventListener('click', function() {
            // Remove previous selections
            templateCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class
            card.classList.add('selected');
            
            // Set total budget
            totalBudget = parseInt(card.dataset.budget);
            document.getElementById('total-budget').textContent = '$' + totalBudget.toLocaleString();
            
            // Show budget tracker
            budgetTracker.style.display = 'block';
            budgetTracker.scrollIntoView({ behavior: 'smooth' });
            
            // Update display
            updateBudgetDisplay();
        });
    });

    // Budget form submission
    if (budgetForm) {
        budgetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const category = document.getElementById('category').value;
            const itemName = document.getElementById('item-name').value;
            const cost = parseFloat(document.getElementById('cost').value);
            
            if (category && itemName && cost) {
                addBudgetItem(category, itemName, cost);
                budgetForm.reset();
            }
        });
    }
});

function addBudgetItem(category, itemName, cost) {
    const item = {
        id: Date.now(),
        category: category,
        name: itemName,
        cost: cost
    };
    
    budgetItems.push(item);
    renderBudgetItems();
    updateBudgetDisplay();
}

function removeBudgetItem(id) {
    budgetItems = budgetItems.filter(item => item.id !== id);
    renderBudgetItems();
    updateBudgetDisplay();
}

function renderBudgetItems() {
    const budgetItemsContainer = document.getElementById('budget-items');
    
    if (budgetItems.length === 0) {
        budgetItemsContainer.innerHTML = '<p class="no-items">No budget items added yet. Use the form above to add your first item.</p>';
        return;
    }
    
    // Group items by category
    const groupedItems = budgetItems.reduce((groups, item) => {
        if (!groups[item.category]) {
            groups[item.category] = [];
        }
        groups[item.category].push(item);
        return groups;
    }, {});
    
    let html = '';
    Object.keys(groupedItems).forEach(category => {
        const categoryItems = groupedItems[category];
        const categoryTotal = categoryItems.reduce((sum, item) => sum + item.cost, 0);
        
        html += `
            <div class="category-section">
                <div class="category-header">
                    <h4>${category}</h4>
                    <span class="category-total">$${categoryTotal.toLocaleString()}</span>
                </div>
                <div class="category-items">
        `;
        
        categoryItems.forEach(item => {
            html += `
                <div class="budget-item">
                    <div class="item-info">
                        <span class="item-name">${item.name}</span>
                        <span class="item-cost">$${item.cost.toLocaleString()}</span>
                    </div>
                    <button class="remove-item" onclick="removeBudgetItem(${item.id})">×</button>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    budgetItemsContainer.innerHTML = html;
}

function updateBudgetDisplay() {
    const totalSpent = budgetItems.reduce((sum, item) => sum + item.cost, 0);
    const remaining = totalBudget - totalSpent;
    const percentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;
    
    document.getElementById('total-spent').textContent = '$' + totalSpent.toLocaleString();
    document.getElementById('remaining-budget').textContent = '$' + remaining.toLocaleString();
    document.getElementById('remaining-budget').className = remaining >= 0 ? 'positive' : 'negative';
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    progressFill.style.width = Math.min(percentage, 100) + '%';
    progressText.textContent = percentage.toFixed(1) + '% used';
    
    // Color coding for progress bar
    if (percentage < 70) {
        progressFill.className = 'progress-fill good';
    } else if (percentage < 90) {
        progressFill.className = 'progress-fill warning';
    } else {
        progressFill.className = 'progress-fill danger';
    }
}

// Add styles for budget tracker
const budgetStyles = `
<style>
.nav-active {
    color: #e91e63 !important;
    font-weight: 600;
}

.budget-templates {
    padding: 4rem 0;
}

.template-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.template-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;
}

.template-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.template-card.selected {
    border-color: #e91e63;
    box-shadow: 0 8px 16px rgba(233, 30, 99, 0.2);
}

.template-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.template-card h3 {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.template-description {
    color: #6b7280;
    margin-bottom: 1rem;
}

.template-budget {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #e91e63, #ec407a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.template-guests {
    color: #9ca3af;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.template-features {
    list-style: none;
    margin-bottom: 2rem;
}

.template-features li {
    padding: 0.25rem 0;
    color: #6b7280;
    position: relative;
    padding-left: 1rem;
}

.template-features li:before {
    content: "•";
    color: #e91e63;
    position: absolute;
    left: 0;
}

.budget-tracker {
    padding: 3rem 0;
    background: rgba(255, 255, 255, 0.5);
}

.budget-header {
    text-align: center;
    margin-bottom: 2rem;
}

.budget-summary {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.budget-summary > div {
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.budget-summary span:first-child {
    color: #6b7280;
    display: block;
    font-size: 0.875rem;
}

.budget-summary span:last-child {
    font-weight: 700;
    font-size: 1.25rem;
    color: #1f2937;
}

.positive {
    color: #10b981 !important;
}

.negative {
    color: #ef4444 !important;
}

.budget-progress {
    max-width: 600px;
    margin: 0 auto 3rem;
    text-align: center;
}

.progress-bar {
    width: 100%;
    height: 1rem;
    background: #e5e7eb;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.progress-fill {
    height: 100%;
    background: #e91e63;
    transition: width 0.3s, background-color 0.3s;
    border-radius: 0.5rem;
}

.progress-fill.good {
    background: #10b981;
}

.progress-fill.warning {
    background: #f59e0b;
}

.progress-fill.danger {
    background: #ef4444;
}

.progress-text {
    color: #6b7280;
    font-weight: 500;
}

.budget-categories {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

.add-category {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: fit-content;
}

.add-category h3 {
    margin-bottom: 1.5rem;
    color: #1f2937;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #374151;
    font-weight: 500;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #e91e63;
    box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1);
}

.budget-items {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.no-items {
    text-align: center;
    color: #6b7280;
    font-style: italic;
    padding: 3rem 1rem;
}

.category-section {
    margin-bottom: 2rem;
}

.category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.category-header h4 {
    color: #1f2937;
    margin: 0;
}

.category-total {
    font-weight: 700;
    color: #e91e63;
}

.budget-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-bottom: 1px solid #e5e7eb;
}

.budget-item:last-child {
    border-bottom: none;
}

.item-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.item-name {
    color: #374151;
}

.item-cost {
    font-weight: 600;
    color: #1f2937;
}

.remove-item {
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1;
}

.remove-item:hover {
    background: #dc2626;
}

@media (max-width: 768px) {
    .budget-categories {
        grid-template-columns: 1fr;
    }
    
    .budget-summary {
        flex-direction: column;
        align-items: center;
    }
    
    .template-grid {
        grid-template-columns: 1fr;
    }
}
</style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', budgetStyles);
