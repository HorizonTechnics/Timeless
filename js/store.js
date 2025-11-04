const plans = [
            {
                name: "Basic",
                price: "$9.99/mo",
                icon: "✨",
                color: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))",
                features: [
                    "Access to Past timeline",
                    "Basic historical records",
                    "Standard support",
                    "Monthly newsletter"
                ]
            },
            {
                name: "Explorer",
                price: "$19.99/mo",
                icon: "⚡",
                color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05))",
                popular: true,
                features: [
                    "Everything in Basic",
                    "Live Solar System access",
                    "Interactive 3D visualizations",
                    "Present moment insights",
                    "Priority support"
                ]
            },
            {
                name: "Timekeeper",
                price: "$29.99/mo",
                icon: "👑",
                color: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))",
                features: [
                    "Everything in Explorer",
                    "Future predictions",
                    "World Globe visualization",
                    "Advanced analytics",
                    "Exclusive content",
                    "24/7 premium support"
                ]
            },
            {
                name: "Eternal",
                price: "$49.99/mo",
                icon: "∞",
                color: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.1))",
                features: [
                    "Everything in Timekeeper",
                    "Unlimited access to all features",
                    "Early access to new content",
                    "Private consulting sessions",
                    "Custom visualizations",
                    "Lifetime updates",
                    "VIP status"
                ]
            }
        ];

        const plansGrid = document.getElementById('plansGrid');
        plans.forEach(plan => {
            const card = document.createElement('div');
            card.className = `plan-card ${plan.popular ? 'popular' : ''}`;
            
            card.innerHTML = `
                ${plan.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
                <div class="plan-icon" style="background: ${plan.color}">
                    <span style="font-size: 3rem;">${plan.icon}</span>
                </div>
                <h3 class="plan-name">${plan.name}</h3>
                <div class="plan-price">${plan.price}</div>
                <ul class="features-list">
                    ${plan.features.map(feature => `
                        <li>
                            <span class="check-icon">✓</span>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                <button class="buy-button ${plan.popular ? 'gradient' : ''}" onclick="openModal('${plan.name}', '${plan.price}')">
                    Buy Now
                </button>
            `;
            plansGrid.appendChild(card);
        });

        function openModal(planName, price) {
            document.getElementById('paymentModal').classList.add('active');
            document.getElementById('modalPlanInfo').textContent = `${planName} - ${price}`;
            document.getElementById('payAmount').textContent = price;
        }

        function closeModal() {
            document.getElementById('paymentModal').classList.remove('active');
            document.getElementById('paymentStep').style.display = 'block';
            document.getElementById('successStep').style.display = 'none';
            document.getElementById('paymentForm').reset();
        }

        document.getElementById('paymentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            setTimeout(() => {
                const planName = document.getElementById('modalPlanInfo').textContent.split(' - ')[0];
                document.getElementById('successPlanName').textContent = `Welcome to the ${planName} plan`;
                document.getElementById('paymentStep').style.display = 'none';
                document.getElementById('successStep').style.display = 'block';
            }, 1500);
        });