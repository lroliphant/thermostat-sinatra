require 'spec_helper'

feature 'I can view a thermostat' do
  scenario 'to update the temperature' do
    visit '/temperature'
    expect(page.status_code).to eq 200
    expect(page).to have_content "Power Saver"
  end
end
