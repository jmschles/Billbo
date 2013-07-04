collection @bills
attributes :user_id, :description, :amount
child :billings do
  attributes :participant_id
end