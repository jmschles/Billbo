User.create([{ :email => "bob@example.com", :password => "123" },
             { :email => "ted@example.com", :password => "123" },
             { :email => "sam@example.com", :password => "123" },
             { :email => "tom@example.com", :password => "123" },
             { :email => "mel@example.com", :password => "123" },
])

Connection.create([{ :creator_id => 2, :receiver_id => 1 },
                   { :creator_id => 2, :receiver_id => 3 },
  ])